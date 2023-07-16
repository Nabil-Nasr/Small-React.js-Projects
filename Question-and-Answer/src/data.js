const {QAData} = localStorage
console.log(QAData);
export const QA=QAData?Array.isArray(JSON.parse(QAData))?JSON.parse(QAData):[]:[]