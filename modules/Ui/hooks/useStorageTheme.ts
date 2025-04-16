import { useEffect, useCallback, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ITheme } from "../types/theme.interface";

type UseThemeHook = [[boolean, ITheme | null], (value: ITheme | null) => void];

function _useAsyncThemeState(
  initialValue: [boolean, ITheme | null] = [true, null]
): UseThemeHook {
  return useReducer(
    (
      state: [boolean, ITheme | null],
      action: ITheme | null = null
    ): [boolean, ITheme | null] => [false, action],
    initialValue
  ) as UseThemeHook;
}

async function _setThemeStorageItemAsync(key: string, value: ITheme | null) {
  try {
    if (value === null) {
      await AsyncStorage.removeItem(key);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    console.error("AsyncStorage is unavailable:", e);
  }
}

export function useStorageTheme(key: string): UseThemeHook {
  const [state, setState] = _useAsyncThemeState();

  useEffect(() => {
    AsyncStorage.getItem(key).then((value) => {
      setState(value ? (value as ITheme) : null);
    });
  }, [key]);

  const setValue = useCallback(
    (value: ITheme | null) => {
      setState(value);
      _setThemeStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}
