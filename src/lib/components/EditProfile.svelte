<script lang="ts">
  import { supabase } from "$lib/supabaseClient";

  // Props
  /** Exposes parent props to this component. */
  export let parent: any;
  export let id: any;
  export let userStatus: boolean;
  export let fullName: string;

  // Stores
  import { getModalStore } from "@skeletonlabs/skeleton";
  const modalStore = getModalStore();

  // Form Data
  const formData = {
    name: "Jane Doe",
    tel: "214-555-1234",
    email: "jdoe@email.com",
  };

  async function onFormSubmit() {
    if ($modalStore[0].response) $modalStore[0].response(formData);

    if (userStatus) {
      const { data:deactivateData, error:deactivateError } = await supabase
        .from("profiles")
        .update({ status: false })
        .eq("id", id)
        .select();

        if (deactivateError) {
            console.log(45)
        console.log(deactivateError)
    } else{
        console.log(23)
        console.log(deactivateError)
        window.location.reload()
    }
    } else {
      const { data, error } = await supabase
        .from("profiles")
        .update({ status: true })
        .eq("id", id)
        .select();

        if (error) {
        console.log(error)
    } else{
        console.log(data)
        window.location.reload()
    }
    }

  }

  // Base Classes
  const cBase = "card p-4 w-modal shadow-xl space-y-4";
  const cHeader = "text-2xl font-bold";
  const cForm =
    "border border-surface-500 p-4 space-y-4 rounded-container-token";
</script>

{#if $modalStore[0]}
  <div class="modal-example-form {cBase}">
    <header class={cHeader}>Update User state</header>
    <h4>{fullName}'s Account Is {userStatus ? "Active" : "Inactive"}</h4>
    <footer class="modal-footer {parent.regionFooter}">
      <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
        >{parent.buttonTextCancel}</button
      >
      {#if userStatus}<button
          class="btn {parent.buttonPositive} variant-filled-error"
          on:click={onFormSubmit}>Deactivate</button
        >{/if}
      {#if !userStatus}<button
          class="btn {parent.buttonPositive} bg-gradient-to-br variant-gradient-success-warning"
          on:click={onFormSubmit}>Activate</button
        >{/if}
    </footer>
  </div>
{/if}
