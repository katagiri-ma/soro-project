module.exports = {
  /**
   * モデルのプロパティをバリデーションする関数を生成する
   * @param {Array<string>} valid - 文字列として有効なプロパティの配列
   * @return {Function} バリデーションするオブジェクトを取る関数
   */
  validProps(valid) {
    return (propsToCheck) => {
      for (const p in propsToCheck) {
        if (!valid.includes(p)) {
          throw new Error("Invalid field: " + p);
        }
      }
      return propsToCheck;
    };
  },

  /**
   * 必要なモデルのプロパティを担保する関数を生成する
   * @param {Array<string>} valid - 文字列として必要なプロパティの配列
   * @return {Function} バリデーションするオブジェクトを取る関数
   */
  requiredProps(required) {
    return (propsToCheck) => {
      for (const p of required) {
        if (!propsToCheck[p]) {
          throw new Error("Missing required field: " + p);
        }
      }
      return propsToCheck;
    };
  },
};
