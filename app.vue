<template>
	<div>
		<NuxtPage />
		<a-button @click="handleLogIn">{{ $t('login') }}</a-button>
		<a-button @click="handleLogOut">{{ $t('logout') }}</a-button>
	</div>
</template>

<script setup>
	import { useUserStore } from './stores/user';
	const userStore = useUserStore();
	const handleLogIn = () => {
		userStore.logIn('dummy@gmail.com','ha1234');
	}
	const handleLogOut = () => {
		userStore.logOut();
	}
</script>
