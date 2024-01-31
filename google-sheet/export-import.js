const downloadBtn = document.getElementById("download");
const upload = document.getElementById("upload");

let user = {
    name: "Aravind",
    age: 23,
    rollNumber: 184253
}

downloadBtn.addEventListener("click", () => {
    // TODO: download json file
    const data = JSON.stringify(user);
    // Blob =>
    let blob = new Blob(['{"name":"aravind", "age":23}'], { type: "application/json" });
    // blob is file present in HEAP memory
    let downloadUrl = URL.createObjectURL(blob); // local file url with in the browser
    // console.log(downloadUrl);
    const link = document.createElement("a");
    let fileName = prompt("Enter the file name you want");
    link.download = `${fileName}.txt`;
    link.href = downloadUrl;

    // 
    link.click();
});


upload.addEventListener("change", () => {
    let file = upload.files[0];

    if (file.type === "text/plain") {
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
            console.log(event.target.result);
        }
        fileReader.readAsText(file);
    }
    else {
        alert("Please upload a txt file");
    }
})