export function orderByProps(objectSort, arraySort = []) {
	let arr = [];
	for (let key in objectSort) {
		if (arraySort.indexOf(key) === -1) {
			arr.push(key);
		}
	}
	arr = [...arraySort, ...arr.sort()];
  
	const result = [];
	for (let key of arr) {
		result.push({ key, value: objectSort[key] });
	}
	return result;
}

export function specialAttack(character) {
  const result = [];
  character.special.forEach((num) => {
    const {
      name, id, icon, description = 'Описание недоступно',
    } = num;

    result.push({
      name, id, icon, description,
    });
  });

  return result;
}