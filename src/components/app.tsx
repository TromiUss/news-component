import NewsComp from "./news-snippet";
import { IData_SnippetNews } from '../types/interface';


function App(props: IData_SnippetNews) {
    return <NewsComp {...props} />;
  }
  
  export default App;
  