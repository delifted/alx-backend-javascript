export default function getListStudentsIds(students) {
  if (students instanceof Array) {
    return students.map((students) => students.id);
  }
  return [];
}
