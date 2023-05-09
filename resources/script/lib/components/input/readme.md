# Input [@/lib/input/index.vue]
- Use
```
<script setup lang="ts">
import { reactive } from 'vue'
import AppInput from '@/lib/components/input/index.vue'
const formData = reactive<any>({})
const errors = reactive<any>({})

// methods
const submit = (event: Event) => {
    console.log(formData)
}
const change = (event: string) => {
    Object.keys(errors).forEach(key => {
        errors[key] = ''
    });
}
const invalid = (name?) => {
    if (name === 'name') {
        errors[name] = 'Enter name properly.'
    }
}
</script>

<template>
    <form @submit.prevent="submit">
        <div class="row">
            <div class="col">
                <app-input v-model="formData.name" name="name" type="text" placeholder="Name" @change="change"
                    @invalid="invalid('name')" required />
                <small class="text-danger">{{ errors['name'] }}</small>
            </div>
        </div>
        <hr>
        <button class="btn btn-success" type="submit">Submit</button>
    </form>
</template>


```
- Props
    - type: [required] 'text' | 'password' | 'email' | 'number' | 'search' | 'radio' | 'select' | 'checkbox' | 'switch' | 'textarea' | 'file' | 'image-uploader'
    - id?: string
    - name?: string
    - autocomplete?: string
    - readonly?: boolean
    - disabled?: boolean
    - placeholder?: string
    - required?: boolean
    - inputClass?: string
    - maxlength?: number 
    - minlength?: number
    - options?: InputOption
        - errorClass?: string (only impacts client side validation)
        - showPasswordEye?: boolean (use only for password type)
        - errorMessage?: string (custom error message for client side validation)
    - list?: InputListItem[] (only use for 'radio' | 'select' | 'checkbox')
    - textAreaCols?: number
    - textAreaRows?: number
    - listValueField?: string
    - labelClass?: string
    - label?: string
    - error?: string
    - multiple?: boolean

- Metods
    - v-modal (formdata two way binding)
    - @change (use )
    - 
    
Note:
````
Please note that the above implementation of the custom input only emits a 'change' event. If you want to listen to native input events you have to implement a custom input yourself.
````
