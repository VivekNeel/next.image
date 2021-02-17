const slug = ({text}) => <>{text}</>

export default slug

export const getStaticPaths = () => {
  return {
      paths : [],
      fallback : true
  }
}
export const getStaticProps = () => {
    return {
        props : {
            text : "hi welcome to next js"
        }
    }
}