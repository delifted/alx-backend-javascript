import Classroom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];

  const rooms = sizes.map((size) => new Classroom(size));
  return rooms;
}
