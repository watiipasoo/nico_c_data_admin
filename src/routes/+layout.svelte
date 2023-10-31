<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Modal } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500 text-white' : '');
	$: isCameraRoute = $page.url.pathname === 'camera';
	
</script>

<!-- App Shell -->


<Modal />
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		
	{#if isCameraRoute}
<nav class="list-nav flex">
	<div class="flex flex-col p-2 justify-between">
		<div class="bg-white p-1 rounded">
			<a href="/" class="justify-center"><img class="h-16" src="/nicoC.png" /></a>
		</div>
	<ul class="my-6 p-4 flex gap-2 flex-col">
		<li>
			<a href="/" class="{classesActive('/')}">
				<Icon icon="mdi:user" width="25" />
				<span class="flex-auto">Users</span>
			</a>
		</li>
		<li>
			<a href="/">
				<Icon icon="eos-icons:subscription-management" width="25" />
				<span class="flex-auto">Subscriptions</span>
			</a>
		</li>
	</ul>
	<LightSwitch />
	</div>
	
	<span class="divider-vertical h-screen" />
</nav>
{/if}


	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
