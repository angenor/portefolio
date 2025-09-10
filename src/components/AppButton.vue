<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: String,
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  }
})

defineEmits(['click'])
</script>

<template>
  <button
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    :class="[
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      // Variants
      {
        'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl focus:ring-blue-500': variant === 'primary',
        'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white shadow-lg hover:shadow-xl focus:ring-gray-500': variant === 'secondary',
        'border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white focus:ring-blue-500': variant === 'outline',
        'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500': variant === 'ghost'
      },
      // Sizes
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-4 py-2 text-base': size === 'md',
        'px-6 py-3 text-lg': size === 'lg',
        'px-8 py-4 text-xl': size === 'xl'
      },
      // States
      {
        'opacity-50 cursor-not-allowed': disabled || loading,
        'cursor-pointer': !disabled && !loading
      }
    ]"
  >
    <!-- Loading Spinner -->
    <FontAwesomeIcon 
      v-if="loading" 
      icon="fa-solid fa-spinner" 
      spin 
      class="mr-2" 
    />
    
    <!-- Left Icon -->
    <FontAwesomeIcon 
      v-else-if="icon && iconPosition === 'left'" 
      :icon="icon" 
      class="mr-2" 
    />
    
    <!-- Slot Content -->
    <slot />
    
    <!-- Right Icon -->
    <FontAwesomeIcon 
      v-if="icon && iconPosition === 'right' && !loading" 
      :icon="icon" 
      class="ml-2" 
    />
  </button>
</template>