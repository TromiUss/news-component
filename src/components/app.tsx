import NewsComp from "./News-snippet";
import { IData_SnippetNews } from '../types/interface';


function App(props: IData_SnippetNews) {
    return <NewsComp {...props} />;
  }
  
  export default App;
  