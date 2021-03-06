import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { acceptWork } from "../../../redux/reducers/Work/actions/async";
import { WorkMetadata } from "../../../redux/reducers/Work/metadata";

const useWorkAccept = () => {
  const dispatch = useDispatch();

  const { workDetail } = useSelector<ReduxRootState,WorkMetadata.IStore>(({ work }) => work, shallowEqual);

  return () => {
    Alert.alert(
      'Solicitud de Trabajo',
      '¿Desea aceptar este trabajo?',
      [
        {
          text : 'Aceptar',
          onPress : async () => {
            const response = await dispatch(acceptWork(workDetail.id));
            if(response!) {
              Alert.alert('Completado','El trabajo se ha aceptado correctamente');
            }
          }
        },
        { text : 'Cancelar' }
      ]
    )
  }
}

export default useWorkAccept;