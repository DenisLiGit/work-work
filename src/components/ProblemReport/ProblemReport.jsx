import React, { useContext, useEffect, useState } from 'react';
import './ProblemReport.scss';
import { FormikProvider, useFormik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Button } from 'antd';
import { ApiStatic } from '../../Api/Api';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { DownCircleOutlined } from '@ant-design/icons';
import { Map, YMaps } from 'react-yandex-maps';
import ProblemReportSelect from './ProblemReportSelect/ProblemReportSelect';
import ProblemReportFiles from './ProblemReportFiles/ProblemReportFiles';
import ProblemReportCKEditor from './ProblemReportCKEditor/ProblemReportCKEditor';
import { problemContext } from '../../App';
import { observer } from 'mobx-react';
// import MapPointer from '../../imgs/mapPoint.png'


const ProblemReport = observer(() => {
  const ProblemStore = useContext(problemContext);
  const [problems, setProblems] = useState({});

  useEffect(() => {
    setProblems(ApiStatic.getProblemCategories());
  }, []);

  const handleMapPoint = () => {
    console.log('map point');
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, actions) => {
      ProblemStore.submitPropblem(values);
      actions.setSubmitting(false);
      actions.resetForm();
    }, validate: (values) => {
      console.log('del if valid not need');
    },
  });

  return (
    <>
      {!Object.keys(problems).length ?
        <LoaderSpinner/>
        :
        <div className='problemReport'>
          <FormikProvider value={formik}>
            <Form>
              <div className="problemReport__row">
                <ProblemReportSelect
                  title="Категория"
                  name="category"
                  category={problems.category}
                />
              </div>
              <div className="problemReport__row">
                <ProblemReportSelect
                  title="Подкатегория"
                  name="subCategory"
                  category={problems.subCategory}
                />
              </div>
              <div className="problemReport__row">
                <div className="problemReport__mapData">
                  <Input name="email" placeholder="Адрес"/>
                  <button onClick={handleMapPoint}>
                    <DownCircleOutlined style={{ 'color': '#fff' }}/>
                    {/*<img src={MapPointer} alt="pointer"/>*/}
                  </button>
                </div>
              </div>
              <div className="problemReport__map">
                <YMaps width="100%" height="100%">
                  <Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>
                </YMaps>
              </div>
              <div className="problemReport__files">
                <ProblemReportFiles/>
              </div>
              <div>
                <ProblemReportCKEditor/>
              </div>
              <Button.Group>
                <SubmitButton>Отправить сообщение</SubmitButton>
              </Button.Group>
            </Form>
          </FormikProvider>

        </div>
      }
    </>
  );
});

export default ProblemReport;
