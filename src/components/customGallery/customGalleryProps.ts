import { customHeaderProps } from "./customHeader/customHeaderProps"
import { customModalProps } from "./customModal/customModalProps"
import { customTableProps } from "./customTable/customTableProps"

export interface customGalleryProps{
    headerProps?: customHeaderProps,
    tableProps:customTableProps,
    modalProps?:customModalProps
}