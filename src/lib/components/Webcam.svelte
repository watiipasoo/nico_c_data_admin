<script>

import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import { LightSwitch } from '@skeletonlabs/skeleton';

    let stream;
    let videoRef;
    let photoRef; // A flag to prevent capturing multiple photos quickly
    let capturing = false; // A flag to prevent capturing multiple photos quickly
    $: showUserInfo = false;




    let idNumber;
    let firstName;
  let lastName;
  let number;
  let paymentMethod;

  
  onMount(async () => {
    await getStream(); // Start the camera when the component mounts
  });

  const paymentMethods = ["Mpamba", "Airtel Money", "Bank"];
  
    async function getStream() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
        videoRef.srcObject = stream;
      } catch (err) {
        console.error(err);
      }
    }
  
    async function stopStream() {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        videoRef.srcObject = null;
      }
    }

    function downloadImage() {
    if (photoRef.src) {
      const link = document.createElement('a');
      link.href = photoRef.src;
      link.download = 'captured_image.png';
      link.click();
    }
  }
  
    async function capturePhoto() {
    if (capturing) return; // Prevent capturing multiple photos quickly
    capturing = true;

    if (stream) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.videoWidth;
      canvas.height = videoRef.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef, 0, 0, canvas.width, canvas.height);

      // Convert the captured frame to a data URL
      const photoDataUrl = canvas.toDataURL('image/png');

      console.log(photoDataUrl);

      // Display the captured photo
      photoRef.src = photoDataUrl;

      capturing = false; // Allow capturing another photo

      // Show the user information when the image is captured
      showUserInfo = true;
    }
    }
  </script>
  
  <section class="container mx-auto px-4">
        <h1 class="text-4xl mt-3 mb-4 text-center text-primary-500 font-bold">VERIFIQ</h1>

    <div class="grid lg:flex gap-8 justify-center">
        <video class="rounded-lg" width="640" height="480" autoplay={true} bind:this={videoRef} />
        <div class="flex lg:hidden gap-4 justify-center">
            <div>
                
            <div class="card p-4 variant-ghost-primary">
                <h6 class="h6 font-bold text-center pb-2">Controls</h6>
            <button class="rounded-lg bg-green-600 text-white px-4 py-2 btn-sm" on:click={capturePhoto}><Icon icon="solar:camera-linear" /></button>
        <button class="rounded-lg bg-red-600 text-white px-4 py-2 btn-sm" on:click={stopStream}><Icon icon="ant-design:stop-filled" /></button>
            </div>
            </div>
        </div>  
    <div class="gap-4 p-4 card">
    <form class="grid gap-4">
        <div>
            <h4 class="h4">Verify User</h4>
        </div>
        <div class="h-40">
            <img class="mt-2 rounded-lg w-40" bind:this={photoRef} />
        </div>

        <div class="form-group">
            <input class="input" bind:value={idNumber} type="text" placeholder="ID Number" />
          </div>

        <div class="form-group">
          <input class="input" bind:value={firstName} type="text" placeholder="First Name" />
        </div>
        <div class="form-group">
          <input class="input" bind:value={lastName} type="text" placeholder="Last Name" />
        </div>
        <div>
            <label for="lastName">Payment Method:</label>
        <select class="select">
            <option value="1">Mpamba</option>
            <option value="2">Airtel Money</option>
            <option value="3">National Bank</option>
        </select>
        </div>
        <button type="button" class="btn variant-filled-primary mt-2">Submit</button>
      </form>
    </div>
    </div>
    <div class="hidden lg:flex gap-4 justify-center">
        <div>
            
        <div class="card p-4 variant-ghost-primary">
            <h6 class="h6 font-bold text-center pb-2">Controls</h6>
            <button class="rounded-lg variant-filled-tertiary text-white px-4 py-2 btn-sm" on:click={downloadImage}><Icon icon="material-symbols-light:download" /></button>
        <button class="rounded-lg variant-filled-secondary text-white px-4 py-2 btn-sm" on:click={capturePhoto}><Icon icon="solar:camera-linear" /></button>
    <button class="rounded-lg variant-filled-warning text-white px-4 py-2 btn-sm" on:click={stopStream}><Icon icon="ant-design:stop-filled" /></button>
        </div>
        </div>
    </div>  
  </section>
  