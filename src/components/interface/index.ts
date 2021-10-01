export interface NewTableItemType {
    title:string,
        body:string,
}
export interface TableItem extends NewTableItemType {
    userId:number,
        id:number,
}

export interface ModalPropsType {
    open:boolean,
    Close:Function,
    AddNewTableItem:Function,

}