from rest_framework.response import Response
from rest_framework.views import APIView

from patientprofile import serializers
from authentication.models import User
from patientprofile.models import PatientInformation

from authentication import serializers as serial
# Create your views here.
class PatientDataView(APIView):
    def get(self,request,format=None):
        serializer = serial.UserProfileSerializer(request.user)
        id = serializer.data['id']
        print(serializer.data['id'])
        patient = PatientInformation.objects.get(user_id = id)
        patserial = serializers.PatientDataSerializer(patient)
        print(patserial.data)
        return Response(patserial.data)

    # def post(self,request,format=None):
    #     serializer = serial.UserProfileSerializer(request.user)
    #     id = serializer.data['id']
    #     input_data = request.data
    #     input_data['user_id'] = id
    #     patserial = serializers.PatientDataSerializer(data = input_data)
    #     patserial.is_valid(raise_exception=True)
    #     patserial.save()
    #     return Response({'msg':'data saved successfully'})