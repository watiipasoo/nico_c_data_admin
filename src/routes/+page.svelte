<script lang="ts">
  import EditProfile from '$lib/components/EditProfile.svelte';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
			

export let parent: any;

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	type ModalComponentWithProps = ModalComponent & {
    props: {
      background: string;
      id: any;
	  userStatus: boolean;
	  fullName: string
    };
  };

	const modalComponent: ModalComponentWithProps = {
  ref: EditProfile,
  props: { background: 'bg-red-500', id: null, userStatus: true, fullName:'' },
  slot: '<p>Skeleton</p>'
};


	const modal: ModalSettings = {
		type: 'component',
		component: modalComponent
	};

	export let data;
  
	let items = data.countries;	
  
	let paginationSettings = {
	  page: 0,
	  limit: 10,
	  size: items.length,
	  amounts: [1, 2, 5, 10],
	} satisfies PaginationSettings;
  
	let itemsToShow: Array<any>;
  
	$: {
	  const startIndex = paginationSettings.page * paginationSettings.limit;
	  const endIndex = startIndex + paginationSettings.limit;
  
	  itemsToShow = items.slice(startIndex, endIndex);
	}
  </script>
<!-- Responsive Container (recommended) -->
<div class="table-container p-2 grid gap-4">
	<h4 class="h4">Users</h4>
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>#</th>
				<th>Full Name</th>
				<th>Email</th>
				<th>Subscription</th>
				<th>Status</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each itemsToShow as row, i}
				<tr>
					<td>{i + 1}</td>
					<td>{row.username}</td>
					<td>{row.email}</td>
					<td>{row.Subscriptions.subscription}</td>
					{#if row.status }
					<span class="chip variant-filled-success rounded-full mt-3 cursor-default">Active</span>
					{/if}
					{#if !row.status }
					<span class="chip variant-ringed-error rounded-full mt-3 cursor-default">Inactive</span>
					{/if}
					<td>
						<button class="btn btn-sm variant-filled-success" type="button" on:click={
						()=>{
							const id = row.id; // Replace 'id' with the actual property name that holds the ID
							modalComponent.props.id = id;
							modalComponent.props.userStatus = row.status;
							modalComponent.props.fullName = row.username
							modalStore.trigger(modal)
							}}
						>Update Status</button>
						<button class="btn btn-sm variant-filled-error" type="button" on:click={
							()=>{
								const id = row.id; // Replace 'id' with the actual property name that holds the ID
								modalComponent.props.id = id;
								modalComponent.props.userStatus = row.status;
								modalComponent.props.fullName = row.username
								modalStore.trigger(modal)
								}}
							>Delete</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<Paginator
	bind:settings={paginationSettings}
	showFirstLastButtons={true}
	showPreviousNextButtons={true}
  />
</div>

<style scoped>
	.table tbody td {
    white-space: nowrap;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    vertical-align: top;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
  