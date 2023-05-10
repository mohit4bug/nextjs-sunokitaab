export default function Home({ blog }) {
  return (
    <div>Home</div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      blog: {
        name: "Mohit",
        age: 20
      }
    }
  }
}