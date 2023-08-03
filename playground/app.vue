<template>
  <VApp>
    <VAppBar>App</VAppBar>
    <VMain>
      <VContainer>
        <KBlock class="pa-4">
          <KFlex class="align-center">
            <KSkeletonIcon class="mr-4" />
            <KSkeletonText
              width="120px"
              height="18px"
            />
          </KFlex>
          <KSkeletonText
            width="200px"
          />
          <KSkeletonText
            width="200px"
          />
          <KSkeletonText
            width="160px"
          />
          <KFlex class="justify-space-between">
            <VCard height="20vh">
              Hello world!
            </VCard>
            <VCard height="20vh">
              Hello world!
            </VCard>
          </KFlex>
          <VCard height="20vh">
            Hello world!
          </VCard>
          <VCard height="20vh">
            Hello world!
          </VCard>
        </KBlock>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script setup></script>
