import Article from '../../../components/Article'


async function fetchBlogs(params) {
  // const params = blogId.params.blogId
  // console.log('data blogId meatadata', params.blogId)
  const apiUrl = `https://sas-api.vercel.app/blogs/${params.blogId}`;
  // console.log('ini apiUrl', apiUrl)

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function generateMetadata({ params }, parent) {
  try {
    // console.log('data params generatemetadata', params.blogId)
    const apiData = await fetchBlogs(params);
    // console.log('ini data apiData', apiData)
    const title = apiData.title
    const imageUrl =
      apiData.imageUrl ||
      "";
    const description =
      apiData.description ||
      "";
    const keywords = apiData.keywords

    const previousImages = (await parent)?.openGraph?.images || [];

    return {
      title,
      description,
      keywords,
      openGraph: {
        images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      title: "Default Title",
      openGraph: {
        images: [],
      },
    };
  }
}

async function Page({params}) {

  const apiData = await fetchBlogs(params);    

  return (
    <div className='lg:w-[100%] mx-auto'>
        {/* <ArticlePage blogId={params}/> */}
        <Article
        title={apiData.title}
        imageUrl={apiData.imageUrl}
        content={apiData.content}
        source={apiData.source}
        author={apiData.author}
      />
    </div>
  )
}

export default Page