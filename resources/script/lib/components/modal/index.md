# AppModal

The `<AppModal/>` component is an implementation of a bootstrap modal that can be extended with named slots, as shown below in usage
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

**The `data-bs-dismiss="modal"` attribute is required for the close button**



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
