export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prevStd, curStd) => prevStd.id || prevStd + curStd.id, 0);
  }
  return 0;
}
