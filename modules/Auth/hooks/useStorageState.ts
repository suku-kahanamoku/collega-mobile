import { useEffect, useCallback, useReducer } from "react";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { Session } from "../types/auth"; // Import the new Session type

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function _useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null]
): UseStateHook<T> {
  return useReducer(
    (
      state: [boolean, T | null],
      action: T | null = null
    ): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

async function _setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === "web") {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error("Local storage is unavailable:", e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

export function useStorageState<T = Session>(key: string): UseStateHook<T> {
  const [state, setState] = _useAsyncState<T>();

  useEffect(() => {
    if (Platform.OS === "web") {
      try {
        if (typeof localStorage !== "undefined") {
          const item = localStorage.getItem(key);
          setState(item ? JSON.parse(item) : null);
        }
      } catch (e) {
        console.error("Local storage is unavailable:", e);
      }
    } else {
      SecureStore.getItemAsync(key).then((value) => {
        setState(value ? JSON.parse(value) : null);
      });
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | null) => {
      setState(value);
      _setStorageItemAsync(key, value ? JSON.stringify(value) : null);
    },
    [key]
  );

  return [state, setValue];
}
