import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import {
    getFirestore,
    doc,
    query,
    where,
    setDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function pushReport(name, location, description, timestamp) {
    await setDoc(doc(db, "report", uuidv4()), {
        name: name,
        location: location,
        description: description,
        timestamp: timestamp,
    });
    console.log(`pushed ${name} at ${location} with ${description} at ${timestamp} to database.`)
}

async function getReports() {

    const querySnapshot = await getDocs(collection(db, "report"));
    const data = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
    });
    return data
}

async function getReportDocQuery(key, operator, value) {

    const q = query(collection(db, "report"), where(key, operator, value));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
        data.push(doc);
    });
    return data
}

async function updateTimestampDocURL(timestamp, url) {

    const reports = await getReportDocQuery("timestamp", "==", timestamp);
    for (let i = 0; i < reports.length; i++) {
        await updateDoc(doc(db, "report", reports[i].id), {
            url: url
        })
    }
}

async function getReportsDoc(report) {

    const q = query(collection(db, "report"),
        where("description", "==", report.description),
        where("location", "==", report.location),
        where("timestamp", "==", report.timestamp));

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc);
    });
    return data
}

async function deleteReport(report) {

    const docs = await getReportsDoc(report);

    for (let i = 0; i < docs.length; i++) {
        await deleteDoc(doc(db, "report", docs[i].id));
    }
}

export { pushReport, getReports, deleteReport, updateTimestampDocURL, storage };
