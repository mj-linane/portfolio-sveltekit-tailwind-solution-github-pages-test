<script>
  import PricingCard from '$lib/components/price-table/PricingCard.svelte';
  import FeatureItem from '$lib/components/price-table/FeatureItem.svelte';
</script>

<div>
  <!-- Global Container -->
  <div class="flex items-center justify-center min-h-screen bg-slate-800">
    <!-- Inner Container -->
    <div
      class="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0"
    >
      <PricingCard
        planName="Basic"
        storage="100GB"
        price="$1.99"
        buttonClass="hover:bg-violet-800 hover:border-violet-800"
      >
        <FeatureItem text="100 GB of storage" />
        <FeatureItem text="Option to add members" />
        <FeatureItem text="Extra member benefits" />
      </PricingCard>

      <PricingCard
        planName="Standard"
        storage="200GB"
        price="$3.99"
        buttonClass="bg-violet-600 hover:bg-violet-800 hover:border-violet-800"
      >
        <FeatureItem text="200 GB of storage" />
        <FeatureItem text="Option to add members" />
        <FeatureItem text="Extra member benefits" />
      </PricingCard>

      <PricingCard
        planName="Premium"
        storage="2 TB"
        price="$8.99"
        buttonClass="hover:bg-violet-800 hover:border-violet-800"
      >
        <FeatureItem text="2 TB of storage" />
        <FeatureItem text="Option to add members" />
        <FeatureItem text="Extra member benefits" />
      </PricingCard>
    </div>
  </div>
</div>


