## AppModal

The `<AppModal/>` component is an implementation of a bootstrap modal that can be extended with named slots, as shown below in usage.  
This component will mostly be used to create custom modals within your application.



### Usage
```vue
<AppModal 
    id="my-modal-id"
>
    <template #modal-header>
        <h4 class="modal-title" id="exampleModalLabel">header text</h4>
    </template>

    <template #modal-body>
        <div>Modal body</div>
    </template>

    <template #modal-footer>
        <button type="button" data-bs-dismiss="modal" class="btn btn-secondary">Close</button>
    </template>
</AppModal>
```




### Props

| Name | Required | Usage | Default |
| ---- | -------- | ----- | ------- |
| id   | Yes      | Serves as a unique modal ID | None
| size | No       | Determines the size of the Modal | None
| staticBackdrop  | No      | Backdrop click will close the modal if set to `true` | `true`
| verticallyCentered | No   | Vertically centers the modal if set to `true` | `true`
| scrollable | No | Will enable scroll in the modal body | `true`
| bodyClass  | No | Modal body class | None
| headerClass  | No | Modal header class | None
| footerClass | No | Modal Footer class | None

#### Prop types
```ts
interface Props {
    id: string;
    size?: 'xl' | 'lg' | 'sm' | 'fullscreen';
    staticBackdrop?: boolean;
    verticallyCentered?: boolean;
    scrollable?: boolean;
    bodyClass?: string;
    headerClass?: string;
    footerClass?: string;
}
```


### Events

The `<AppModal/>` component emits a `modal-opened` and a `modal-closed` event.  

The `modal-opened` and the `modal-closed` events are fired when the component mounts and unmounts respectively  
  

**The following components listed after this point were all built on top of the `<AppModal />` component.**    





# Modal

Unlike it's parent, this component only takes in a single slot as shown below.   


### Usage
```vue
<Modal
    id="my-modal-id"
    v-if="showModal"
    size="xl"
>
    <!-- gets passed in as `modal-body` -->
    <div class="modal-body-content">
        Modal body content
    </div>
</Modal>
```

### Props

| Name | Required | Usage | Default |
| ---- | -------- | ----- | ------- |
| id   | Yes      | Serves as a unique modal ID | None
| size | No       | Determines the size of the Modal | `''`
| staticBackdrop  | No      | Backdrop click will close the modal if set to `true` | `false`
| verticallyCentered | No   | Vertically centers the modal if set to `true` | `false`
| scrollable | No | Will enable scroll in the modal body | `true`
| bodyClass  | No | Modal body class | None
| headerClass  | No | Modal header class | None
| footerClass | No | Modal Footer class | None
| headerText | No | Determines the text content of the modal header | `'Modal Header'`


#### Prop types
```ts
interface Props {
    id: string;
    size?: 'xl' | 'lg' | 'sm' | 'fullscreen' | '';
    staticBackdrop?: boolean;
    verticallyCentered?: boolean;
    scrollable?: boolean;
    bodyClass?: string;
    headerClass?: string;
    footerClass?: string;
    headerText?: string;
}
```

As you can see it's mostly the same as `<AppModal />` with the exception of an additional prop called `headerText`.


### Events

Similar to the `<AppModal/>` component, this one emits a `modal-opened` and a `modal-closed` event as well.  

The `modal-opened` and the `modal-closed` events are also fired when the component mounts and unmounts respectively.




# ConfirmationModal

A simple headerless and footerless component that takes in a yes/no input from the user

### Usage
```vue
<ConfirmationModal
    id="my-modal-id"
    v-if="showModal"
    @confirmed="handleConfirm"
    @cancelled="handleCancelled"
/>
```

### Props

| Name | Required | Usage | Default |
| ----   | -------- | ----- | ------- |
| id     | Yes | Serves as a unique modal ID | None
| prompt | No  | Confirmation prompt         | `'Are you sure?'`
| icon | No  | Modal icon | `'alert-circle'`
| options | No  | Further configuration | Shown below

#### Prop types
```ts
interface Props {
    id: string;
    prompt?: string;
    icon?: string;
    options?: IConfirmationModalOptions;
}
```

##### Options
| Name | Usage | Default |
| ---- | ---- | ---- |
| iconSize | Determines the size of the modal icon | 72
| confirmBtnText | Text content for the confirm button | `'confirm'`
| cancelBtnText | Text content for the cancel button | `'cancel'`
| modalClass | Bootstrap class that determines icon and confirm button color | `'danger'`

#### IConfirmationModalOptions interface
```ts
interface IConfirmationModalOptions {
    iconSize?: number,
    confirmBtnText?: string;
    cancelBtnText?: string;
    modalClass?: 'primary' | 'danger' | 'success' | 'warning' | 'info',
}
```

### Events

The confirmation modal emits one of two events, `confirm` or `cancel` depending on user input.



# InfoModal

Much like the confirmation modal, this component is also without a header and a footer.  
However this component only has a single 'Okay' button.

### Usage
```vue
<InfoModal
    id="my-modal-id"
    v-if="showModal"
    @modal-closed="showModal = false"
/>
```

### Props

| Name | Required | Usage | Default |
| ----   | -------- | ----- | ------- |
| id     | Yes | Serves as a unique modal ID | None
| prompt | No  | Confirmation prompt         | `'Are you sure?'`
| icon | No  | Modal icon | `'alert-circle'`
| options | No  | Further configuration | Shown below

#### Prop types
```ts
interface Props {
    id: string;
    prompt?: string;
    icon?: string;
    options?: IInfoModalOptions;
}
```

##### Options
| Name | Usage | Default |
| ---- | ---- | ---- |
| iconSize | Determines the size of the modal icon | 72
| btnText | Text content for the modal button | 72
| modalClass | Bootstrap class that determines icon and confirm button color | `'danger'`
| staticBackdrop  | No      | Backdrop click will close the modal if set to `true` | `true`

#### IInfoModalOptions interface
```ts
interface ModalOptions {
    iconSize?: number,
    btnText?: string;
    modalClass?: 'primary' | 'danger' | 'success' | 'warning' | 'info',
    staticBackdrop?: boolean
}
```


### Events

Similar to some of the previous modal components,  the `<InfoModal/>` component emits a `modal-opened` and a `modal-closed` event.  

The `modal-opened` and the `modal-closed` events are also fired when the component mounts and unmounts respectively  



#### Certain things to be aware of

* **The `modal-closed` event must always be listened for when available**  

	In order to close your modal you *have* to listen for the custom `modal-close` event to change your v-if value to false 

* **The `data-bs-dismiss="modal"` attribute is required for the close button**

    If you're creating a custom modal using the `<AppModal/>` component, be sure to include the aforementioned attribute in your close button as demonstrated above
