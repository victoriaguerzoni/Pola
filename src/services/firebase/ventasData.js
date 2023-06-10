import { addDoc, collection, getFirestore } from "firebase/firestore"

const ventasData=async(venta)=>{
    const db= getFirestore();
    const ventaCollection=collection (db,'venta');
    response=await addDoc(ventaCollection,venta)
    console.log(response)
}
export {ventasData};