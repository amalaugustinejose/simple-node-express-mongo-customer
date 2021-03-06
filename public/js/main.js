$(document).ready( () => {
	$('.deleteUser').on('click', deleteUser);
});

function deleteUser() {
	const confirmation = confirm('Are You Sure?');

	if(confirmation) {
		$.ajax({
			type: 'DELETE',
			url: '/users/delete/' + $(this).data('id')
		}).done( (response) => {
			window.location.replace('/');
		})
		window.location.replace('/');
	}else {
		return false;
	}
}