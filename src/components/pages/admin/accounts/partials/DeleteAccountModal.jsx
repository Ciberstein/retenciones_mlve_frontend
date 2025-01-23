import Modal from '../../../../elements/Modal'
import { useForm } from 'react-hook-form';
import { Button } from '../../../../elements/user/Button';
import axios_instance from '../../../../../utils/apiConfig';
import { useDispatch } from 'react-redux';
import { setLoad } from '../../../../../store/slices/loader.slice';
import Swal from 'sweetalert2';
import { accountThunk } from '../../../../../store/slices/account.slice';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const DeleteAccountModal = ({ open, setOpen, selected, setSelected }) => {

  const { handleSubmit } = useForm();
  const dispatch = useDispatch()


  const submit = async () => {
    dispatch(setLoad(false))
    const url = `/users/${selected.id}`

    await axios_instance.delete(url, { withCredentials: true })
      .then((res) => {
        dispatch(accountThunk())
        setSelected(false)
        setOpen(false)
        console.log(res.data)
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          toast: true,
          title: res.data.detail,
          showConfirmButton: false,
          timer: 3000
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          toast: true,
          title: err.response.data.detail,
          showConfirmButton: false,
          timer: 3000
        });
      })
      .finally(() => dispatch(setLoad(true)))
  }

  return (
    <Modal open={open} setOpen={setOpen} header={false}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 font-medium text-center bg-gradient-to-b from-brand-orange-400 via-brand-orange-300 to-transparent p-4 rounded-lg">
          <ExclamationTriangleIcon className="h-20" />
          <span className="text-xl">
            ¿Está seguro que desea desactivar el usuario?
          </span>
        </div>
        <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            size="lg"
            type="submit"
          >
            Confirmar  
          </Button>
          <Button
            size="lg"
            type="button"
            hierarchy="quiet"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
        </form>
      </div>
    </Modal>
  )
}
