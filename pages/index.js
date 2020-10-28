import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const agencyRes = await fetch('http://localhost:3000/api/agencies');
  const agencies = await agencyRes.json();
  
  const advertiserRes = await fetch('http://localhost:3000/api/advertisers');
  const advertisers = await advertiserRes.json();
  
  const campaignRes = await fetch('http://localhost:3000/api/advertisers');
  const campaigns = await campaignRes.json();
  
  return {
    props: {
      agencies,
      advertisers,
      campaigns
    },
  }
}

export default function Home(props) {
  console.log('props', props);
  const {advertisers, agencies, campaigns} = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Media Math Campaign Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <select onChange={e => {
            console.log(e.target);
            
          }}>
            {agencies && agencies.map((item, idx) => (
                <option key={`item-${idx}`} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
