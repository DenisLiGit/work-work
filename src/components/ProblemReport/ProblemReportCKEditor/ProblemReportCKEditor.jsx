import React, { useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { problemContext } from '../../../App';
import { observer } from 'mobx-react';
import './ProblemReportCKEditor.scss'

const ProblemReportCKEditor = observer(() => {
  const ProblemStore = useContext(problemContext);

  return (
    <div className="problemReportCKEditor">
      <label>
        Текст сообщения
      </label>
    <CKEditor
      editor={ClassicEditor}
      data=""
      onChange={(event, editor) => {
        const data = editor.getData();
        ProblemStore.setCKText(data);
      }}
    />
    </div>

  );
});

export default ProblemReportCKEditor;
