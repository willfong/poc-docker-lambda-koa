FROM public.ecr.aws/lambda/nodejs:14
COPY package.json package-lock.json ${LAMBDA_TASK_ROOT}
RUN npm install
COPY app.js ${LAMBDA_TASK_ROOT}
CMD [ "app.handler" ]