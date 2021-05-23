import React, { useContext } from 'react';
import { Typography } from 'antd';
import { Upload, Button } from 'antd';
import { problemContext } from '../../../App';
import { observer } from 'mobx-react';
import FileDownload from '../../../imgs/Subtract.svg';
import './ProblemReportFiles.scss';

const ProblemReportFiles = observer(() => {
  const problemStore = useContext(problemContext);

  const actionUpload = (files) => {
    problemStore.setFiles(files);
  };

  const handleChange = info => {
    problemStore.removeFiles(info.fileList)
  };

  const props = {
    action: actionUpload,
    onChange: handleChange,
    multiple: true,
  };

  return (
    <div className="problemReportFiles">
      <label>
        Прикрепить файл
      </label>
      <Typography.Text>
        До 10 файлов не более 20Мб каждый
      </Typography.Text>
      <Upload className="problemReportFiles__content" {...props} fileList={problemStore.problemFiles}>
        <div className="problemReportFiles__controls">
          <div>
            <Button icon={<img src={FileDownload} alt="download" />}>Прикрепить файл</Button>
            <Typography.Text>
              Или перетащите его сюда
            </Typography.Text>
          </div>
        </div>
      </Upload>
    </div>
  );
});

export default ProblemReportFiles;
