import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";

type Lngs = { [key: string]: { nativeName: string } };

interface Post {
  title: string;
  body: string;
}

const lngs: Lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function App() {
  const [apple, setApple] = useState(0);
  const { t, i18n } = useTranslation(["blog", "content"]);

  const posts = t("posts", { returnObjects: true }) as Post[];
  console.log(t("content:plural", { count: 0 }));
  return (
    <>
      <h1>{t("content:learn")}</h1>
      <div>
        <Trans i18nKey="content:description" />
      </div>
      <h2>{t("content:interpol", { is: "Apple" })}</h2>
      <h2>{t("content:plural.apple", { count: apple })}</h2>
      <button onClick={() => setApple((prev) => prev + 1)}>Graf Zahl</button>

      {Object.keys(lngs).map((key) => (
        <button
          type="submit"
          key={key}
          onClick={() => i18n.changeLanguage(key)}
          disabled={i18n.resolvedLanguage === key}
        >
          {lngs[key].nativeName}
        </button>
      ))}

      {posts.map((post) => (
        <h1 key={post.title}>{post.title}</h1>
      ))}
    </>
  );
}

export default App;
