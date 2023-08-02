import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBRBFhUm3rYtE3AhwN74R9MrlE1e_Pp2Tk",
  authDomain: "ejs-firebase.firebaseapp.com",
  projectId: "ejs-firebase",
  storageBucket: "ejs-firebase.appspot.com",
  messagingSenderId: "455645662053",
  appId: "1:455645662053:web:0967d030a2f499e3026f8c",
  measurementId: "G-FZD7S70FEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//tạo ra storage
export const storage = getStorage(app)

//uploadFileStorage: 2 params
//1st param: your file, 2nd param: folder you need
// if failed => false
// else success => url file

export async function uploadFileToStorage(fileUploads, folderName, bufferData) {
    if (!fileUploads) {
        return false
    }

    let fileRef;
    let metadata;
    let url;
    if(bufferData) {
        url = await uploadBytes(fileRef, bufferData, metaData).then(async res => {
            return await getDownloadURL(res.ref)
        })
    }

}