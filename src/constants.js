const CONTRACT_ADDRESS = '0x8ffd47C66a92E61173f27bd75318C23F2f624c5A';


const transformCharacterData = (characterData) => {
	return {
		name: characterData.name,
		imageURI: characterData.imageURI,
		hp: characterData.hp.toNumber(),
		maxHp: characterData.maxHp.toNumber(),
		attackDamage: characterData.attackDamage.toNumber(),
	};
};

export { CONTRACT_ADDRESS, transformCharacterData };
