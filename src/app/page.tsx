import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import ProductHero from "@/components/ProductHero"

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const { frontmatter } = homepage;
  const {
    banner,
  }: {
    banner: { title: string;  title2: string, title3: string, image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <> 
      <SeoMeta />
      <ProductHero />
      {/*<section className="section pt-10">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-2 text-center lg:col-7">
              <h1
                className="mb-2"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <h3
                className="mb-2"
                dangerouslySetInnerHTML={markdownify(banner.title2)}
              />
              <h4
                className="mb-0"
                dangerouslySetInnerHTML={markdownify(banner.title3)}
              />
            </div>
           </div>
        </div>
        
  </section>*/}
      
  

     {/*<Testimonials data={testimonial} /> */} 
    </>
  );
};

export default Home;
