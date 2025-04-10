import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Flag from "react-native-flags";

import { useLocale } from "@/modules/Lang/hooks/useLocale";
import RowCmp from "@/modules/Ui/components/Row";

/**
 * Funkční komponenta, která zobrazuje přepínač jazyka pro aplikaci.
 * Zobrazuje seznam dostupných jazyků jako vlajky a umožňuje uživateli
 * změnit jazyk aplikace výběrem vlajky.
 *
 * @komponenta
 * @returns {JSX.Element} Vykreslená komponenta přepínače jazyka.
 *
 * @poznámky
 * - Tato komponenta používá hook `useLocale` pro přístup k aktuálnímu jazyku,
 *   dostupným jazykům, překladové funkci a handleru pro změnu jazyka.
 * - Komponenta `RowCmp` je použita pro rozložení přepínače jazyka v řádku.
 * - Vlajky jsou zobrazeny pomocí komponenty `Flag` a aktuálně vybraný jazyk
 *   je vizuálně zvýrazněn.
 *
 * @example
 * ```tsx
 * <LangSwitchCmp />
 * ```
 *
 * @dependencies
 * - `useLocale`: Vlastní hook poskytující lokalizační funkce.
 * - `RowCmp`: Komponenta pro rozložení.
 * - `TouchableOpacity`: Wrapper pro dotykové prvky.
 * - `Flag`: Komponenta pro zobrazení vlajek zemí.
 *
 * @styles
 * - `styles.flagsContainer`: Styl pro kontejner obsahující vlajky.
 * - `styles.selectedFlag`: Styl aplikovaný na aktuálně vybranou vlajku.
 * - `styles.flag`: Styl aplikovaný na nevybrané vlajky.
 */
const LangSwitchCmp = () => {
  const { locale, locales, t, changeLanguage } = useLocale();

  return (
    <RowCmp
      label={t("settings.language")}
      variant="inline"
      style={{ children: styles.flagsContainer }}
    >
      {locales.map((loc) => (
        <TouchableOpacity
          key={loc.code}
          onPress={() => changeLanguage(loc.code)}
        >
          <Flag
            code={loc.mark}
            size={32}
            style={locale === loc.code ? styles.selectedFlag : styles.flag}
          />
        </TouchableOpacity>
      ))}
    </RowCmp>
  );
};

const styles = StyleSheet.create({
  flagsContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
  flag: {
    opacity: 1,
  },
  selectedFlag: {
    opacity: 0.6,
  },
});

export default LangSwitchCmp;
