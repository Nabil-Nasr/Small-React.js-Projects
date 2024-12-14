const {QAData} = localStorage
const QAArray = JSON.parse(QAData)
console.log(QAData,QAArray);
export const QA=QAData?Array.isArray(QAArray)?QAArray:[]:[]