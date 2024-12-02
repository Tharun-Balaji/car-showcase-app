import { CarProps } from "@/types"

/**
 * CarDetailsProps is an interface that describes the properties passed to
 * the CarDetails component.
 *
 * @property {boolean} isOpen - A boolean that determines whether the
 * component is open or closed.
 * @property {() => void} closeModal - A function that is called when the
 * component is closed.
 * @property {CarProps} car - The car to be rendered in the component.
 */
interface CarDetailsProps {
  /**
   * A boolean that determines whether the component is open or closed.
   */
  isOpen: boolean,
  /**
   * A function that is called when the component is closed.
   */
  closeModal: () => void,
  /**
   * The car to be rendered in the component.
   */
  car: CarProps
}

export default function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {

  return (
    <div>CarDetails</div>
  )
}
