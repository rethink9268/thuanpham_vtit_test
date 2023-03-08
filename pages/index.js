import Page1 from "@/components/Page1.js";
import { dummyData } from "@/assets/dummyData.js";
import Page2 from "@/components/Page2.js";
import Page3 from "@/components/Page3.js";
import Page4 from "@/components/Page4.js";
import Page5 from "@/components/Page5.js";
import Page6 from "@/components/Page6.js";
import Page7 from "@/components/Page7.js";

export default function Home() {
  return (
    <main>
      <Page1 {...dummyData.page1} />
      <Page2 {...dummyData.page2} />
      <Page3 {...dummyData.page3} />
      <Page4 slides={dummyData.portfolioSlider} />
      <Page5 {...dummyData.page5} />
      <Page6 {...dummyData.page6} />
      <Page7 />
    </main>
  );
}
