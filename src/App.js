import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";
import Modal from "./components/Modal";
import './style/main.css'
import React,{useState,useMemo} from "react";
import useFetch from "./components/hooks/useFetch";
import useSort from "./components/hooks/useSort";

function App() {
    const [modal_is_open, set_modal_is_open] = useState(false)
    const [colum_sort,set_value_sort] = useState('id')
    const [table_date,set_table_date] = useState([{userId:'2',id:"0",title:'awd',body:'awdad'}])
    const SordetDate = useSort(table_date,colum_sort)

    useFetch('https://jsonplaceholder.typicode.com/posts',set_table_date)
    const CloseModal = () => set_modal_is_open(false)
    const OpenModal = () => set_modal_is_open(true)


    const AddNewTableItem = (new_table_item) => {
        let normal_table_data = {userId: Math.round(Math.random()*10),id: table_date.length + 1,...new_table_item}
        let new_table_date = [...table_date, normal_table_data]
        set_table_date(new_table_date)
    }

  return (
    <div className="App">
        <Modal AddNewTableItem={AddNewTableItem} Close={CloseModal} open={modal_is_open}/>
      <Header OpenModal={OpenModal}> </Header>
      <main>
          <Table
              UpdateSortValues={set_value_sort}
              table_date={SordetDate} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
