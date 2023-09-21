import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import CategoryProduct from "../components/CategoryProduct";
import ProductsParallaxBg from "@/components/ProductsParallaxBG";
import styles from "../styles/Category.module.css";

export default function CategoryIndex({ products }) {
  const router = useRouter();
  const { category, sort } = router.query;
  const [filterTag, setFilterTag] = useState(sort);

  // if (!category) {
  //   router.push("/");
  // }

  useEffect(() => {
    router.push({
      pathname: category,
      query: { sort: filterTag },
    });
  }, [category, filterTag]);

  // const categories = ["tortas", "desayunos", "postres"];
  const navCategories = [
    { name: "Tortas y Postres", query: "tortas" },
    { name: "Budines/Confitería", query: "budines-confiteria" },
  ];
  const categoryTitle =
    category === "tortas"
      ? "Tortas y Postres"
      : category.charAt(0).toUpperCase() + category.slice(1);

  const categoryLinks = navCategories.map((el) => (
    <Link
      href={`/${el.query}`}
      key={el.name}
      className={el.query === category ? styles.active : ""}
    >
      {el.name}
    </Link>
  ));

  const categoryProducts = products.map((product, idx) => (
    <CategoryProduct key={idx} product={product} />
  ));
  return (
    <Layout>
      <Head>
        <title>{`${categoryTitle} | Productos`}</title>
      </Head>
      <ProductsParallaxBg
        image={category === "tortas" ? true : false}
        title={categoryTitle}
        // tortas={categoryTitle === "tortas"}
        // budines={categoryTitle === "budines-confiteria"}
      />

      <div className={styles.homeContainer}>
        {/* <h1 className={styles.categoryTitle}>{categoryTitle}</h1> */}
        <span className={styles.categoryLinks}>{categoryLinks}</span>
        <div className={styles.homeProducts}>
          <div className={styles.sortForm}>
            <form autoComplete="off">
              <label htmlFor="filter">Ordenar por</label>
              <div className={styles.customSelect}>
                <select
                  name="filter"
                  id="filter"
                  value={filterTag}
                  onChange={(e) => setFilterTag(e.target.value)}
                >
                  <option value="recent">Recientes</option>
                  <option value="price">
                    Precio (Del mas alto al mas bajo)
                  </option>
                  <option value="-price">
                    Precio (Del mas bajo al mas alto)
                  </option>
                  <option value="orden">Nombre (De la A a la Z)</option>
                </select>
                <span className={styles.customArrow}></span>
              </div>
            </form>
          </div>
          <div className={styles.products}>{categoryProducts}</div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query: { category, sort } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/${category}?sort=${sort}`
  );
  const products = await res.json();
  const categories = ["tortas", "budines-confiteria"];
  if (!categories.includes(category)) {
    return { notFound: true };
  }
  return {
    props: {
      products,
    },
  };
};
