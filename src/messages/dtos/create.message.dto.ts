// NOTE: バリデーションデコレーターの種類
// URL: https://www.npmjs.com/package/class-validator#validation-decorators
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
