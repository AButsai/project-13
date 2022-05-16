export default function createYear(obj) {
  return obj.release_date ? obj.release_date.split('-')[0] : '';
}
