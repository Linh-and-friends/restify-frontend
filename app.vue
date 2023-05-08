<template>
	<div>
		<NuxtWelcome />
		<a-button @click="handleLogIn">Log In</a-button>
		<a-button @click="handleLogOut">Log Out</a-button>
	</div>
</template>

<script setup>
	import { useUserStore } from './stores/user';
	const userStore = useUserStore();
	const handleLogIn = () => {
		userStore.logIn();
	}
	const handleLogOut = () => {
		userStore.logOut();
	}
</script>
