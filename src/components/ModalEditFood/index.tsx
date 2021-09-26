import { useRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import { Form } from './styles'
import Modal from '../Modal'
import Input from '../Input'
import { FormHandles } from '@unform/core'

interface IModalEditFood {
  editingFood: IFood
  handleUpdateFood: (data: IAddFood) => void
  isOpen: boolean
  setIsOpen: () => void
}

interface IAddFood {
  description: string
  image: string
  name: string
  price: string
}

interface IFood {
  id: number
  available: boolean
  description: string
  name: string
  image: string
  price: number
}

const ModalEditFood = ({ editingFood, handleUpdateFood, isOpen, setIsOpen }: IModalEditFood) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: IAddFood) => {
    handleUpdateFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export default ModalEditFood
