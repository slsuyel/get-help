import { Form, Upload, message } from 'antd';
const { Dragger } = Upload;
import { InboxOutlined } from '@ant-design/icons';

export const EvidenceFields = () => {
  const validateImage = (file: { type: string }) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
      return;
    }
  };

  // Function to validate video file type
  const validateVideo = (file: { type: string }) => {
    const isVideo = file.type.startsWith('video/');
    if (!isVideo) {
      message.error('You can only upload video files!');
      return;
    }
  };

  return (
    <>
      <div className="col-md-4">
        <Form.Item label="Evidence 1 (image)" name="image1">
          <Dragger beforeUpload={validateImage} multiple={false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
      </div>
      <div className="col-md-4">
        <Form.Item label="Evidence 2 (image)" name="image2">
          <Dragger beforeUpload={validateImage} multiple={false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
      </div>
      <div className="col-md-4">
        <Form.Item label="Evidence 3 (image)" name="image3">
          <Dragger beforeUpload={validateImage} multiple={false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
      </div>
      <div className="col-md-4">
        <Form.Item label="Evidence 4 (video)" name="video1">
          <Dragger beforeUpload={validateVideo} multiple={false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
      </div>
      <div className="col-md-4">
        <Form.Item label="Evidence 5 (video)" name="video2">
          <Dragger beforeUpload={validateVideo} multiple={false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
      </div>
    </>
  );
};
