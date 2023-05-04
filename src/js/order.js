export const createNewOrder = ({ product, clientForm, delivery }) => {
	const order = {
		client: {
			name: clientForm.data.name,
			surname: clientForm.data.surname,
			address: {
				street: clientForm.data.street,
				building: clientForm.data.building,
				flat: clientForm.data.flat,
				postalCode: clientForm.data.postalCode,
			},
			contact: {
				phone: clientForm.data.phone,
				email: clientForm.data.email,
			},
		},
		product: {
			type: product.type,
			printLocation: product.printLocation,
			effect: product.effect,
			graphics: product.graphics,
			blurPower: product.blurPower,
		},
		delivery: {
			method: delivery.method,
			deliveryAddres: delivery.address,
		},
	};
	return order;
};
